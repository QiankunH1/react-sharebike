import React, { Component } from 'react'
import { Form ,Select,DatePicker,Button ,Card,Table, Spin,message,Modal} from 'antd';
import './index.less'
import axios from "../../axios"
const FormItem = Form.Item;
const Option = Select.Option;
const {  RangePicker } = DatePicker; 
 


 class Order extends Component {
   
  constructor(props){
    super(props)
}

 state={
   data:[],
    total:10,
    isloading:false,
    selecteditem:{},
    visible:false,
    selectedRowKeys: [],
    endItem: {},
    id:''
 }

componentWillMount(){
  this.getData()
}
params={
  pn:1
}
 //获取数据
 getData=()=>{
    this.setState({
      isloading:true
    },()=>{
      axios.get('/order/list',this.params).then(res=>{
        console.log(res)
        this.setState({
         data:res.result.item_list.map((item,index)=>{
             item.key=index
             return item
         }),
         total:res.result.total_count,
         isloading:false
        },()=>{
          console.log(this.state.isloading)
        })
        
      })
    })
   
 }

   cityopions =[
    {
      value:0,
      lable:'北京'
    },
    {
      value:1,
      lable:'上海'
    },
    { 
      lable:'深圳'
    },
  ]
   orderopions =[
    {
      value:0,
      lable:'已完成'
    },
    {
      value:1,
      lable:'进行中'
    },
    {
      value:2,
      lable:'行程结束'
    },
  ]
//表格数据
   columns = [{
    title: '城市id',
    dataIndex: 'id',
    key: 'id',
   
  }, 
  {
    title: '订单编号',
    dataIndex: 'order_sn',
    key: 'order_sn',
  }, 
  
  {
    title: '自行车编号',
    dataIndex: 'bike_sn',
    key: 'bike_sn',
  },
  {
    title: '用户id',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: '用户姓名',
    dataIndex: 'user_name',
    key: 'user_name',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: '距离',
    dataIndex: 'distance',
    key: 'distance',
  },
  {
    title: '用时',
    dataIndex: 'total_time',
    key: 'total_time',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '开始时间',
    dataIndex: 'start_time',
    key: 'start_time',
  },
  {
    title: '结束时间',
    dataIndex: 'end_time',
    key: 'end_time',
  },
  {
    title: '总花费',
    dataIndex: 'total_fee',
    key: 'total_fee',
  },
  {
    title: '用户支付',
    dataIndex: 'user_pay',
    key: 'user_pay',
  },

]




//   handlesearch=()=>{
//   console.log(this.props.form.getFieldsValue())
// }

  handlesearch(){
    console.log(this.props.form)
  // console.log(this.props.form.getFieldsValue())
}
 reset=()=>{
  this.props.form.resetFields()
 }
 handledetail=()=>{
  //  let {selectedItem} = this.state
  if(this.state.selectedItem){
    console.log(this.state.selectedItem)
    const id = this.state.selectedItem[0].id
    // axios.get(`/order/detail/${id}`).then(res=>{
    //   console.log(res)
    // })
    axios.get('/order/detail,id').then(res=>{
      console.log(res)
    })
  }else{
    Modal.info({
      title: '提示',
      content: '请选择一个订单'
  })
  }
 }



 handledone = () => {

   console.log(this.state.selectedItem)
  if(!this.state.selectedItem) {
    
      Modal.info({
          title: '信息',
          content: '请选择一条订单结束',
          onOk(){},
      })
  } else {
      axios.get('/order/ebike_info').then(res => {
          if(res.code == 0){
              this.setState({
                  endItem: res.result,
                  visible: true
              })
          }
      })
  }
}

handleend = () => {
  axios.get('/order/finish_order', this.state.endItem.id).then(res => {
      if(res.code == 0){
          this.setState({
              visible: false
          })
          this.getData()
          message.success('成功结束订单')
      }
  })
}















  render() {
    const rowSelection = {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys,selectedRows)
      this.setState({
        selectedItem:selectedRows,
        selectedIndex:selectedRowKeys
      })
      },
    }
   const pagination= {
      total:this.state.total,
      pageSize: 10,
      onChange:(index)=>{ 
        this.params.pn=index
        this.getData()
      }
    }
// const isLoading=false
    const { getFieldDecorator} = this.props.form;
    return (
      <div>
        <Card>
            <Form layout="inline" >    
                <FormItem 
                label='城市'
                >
                 {getFieldDecorator('city',{initialValue:0}) 
                  (<Select
                    style={{ width: 200 }}          
                    >
                    {this.cityopions.map(item=> <Option value={item.value} key='value'>{item.lable}</Option>)}     
                    </Select>)
                  } 


               
                </FormItem> 
                <FormItem 
                label='订单日期'
                >
                 {getFieldDecorator('date') 
                  (<RangePicker></RangePicker>)
                  }            
                </FormItem>
                <FormItem 
                      label='订单状态'
                      >
                       {getFieldDecorator('status',{initialValue:0}) 
                          ( <Select
                            style={{ width: 200 }}          
                          >
                        {this.orderopions.map(item=> <Option value={item.value} key='value'>{item.lable}</Option> )}     
                      </Select>)
                          } 
                     
                </FormItem>
            </Form>
            <div className='btnwrap1'>
                {/* <Button type="primary" className='button-left' onClick={this.handlesearch}>查询</Button> */}
                <Button type="primary" className='button-left' onClick={this.handlesearch.bind(this)}>查询</Button>
                <Button onClick={this.reset}>重置</Button>
            </div>
        </Card>
        <Card>
            <div className='btnwrap2'>
                <Button type="primary" className='button-left' onClick={this.handledetail}>订单详情</Button>
                <Button type="primary"  onClick={this.handledone}>结束订单</Button>        
            </div>
        </Card>
        <Card>
            <Spin
            spinning={this.state.isloading}
            >
              <Table columns={this.columns}
                pagination ={pagination}
                rowSelection={rowSelection}
                // isLoading = {this.state.isloading}
                dataSource={this.state.data}>
                
                </Table>                   
            </Spin>                                  
        </Card>
        <Modal
                    title='结束订单'
                    visible={this.state.visible}
                    onOk={this.handleend}
                    onCancel={() => this.setState({visible: false})}
                >
                    <ul className='ul-data'>
                        {/* <li>
                            <span className='car-num li-title'>车辆编号：</span>
                            {this.state.endItem.bike_sn}
                        </li> */}
                        <li>
                            <span className='car-num li-title'>剩余电量：</span>
                            {this.state.endItem.battery}
                        </li>
                        <li>
                            <span className='car-num li-title'>行程开始时间：</span>
                            {this.state.endItem.start_time}
                        </li>
                        <li>
                            <span className='car-num li-title'>当前位置：</span>
                            {this.state.endItem.location}
                        </li>

                    </ul>
                </Modal>                                                                       
      </div>
    )
  }
}
export default Form.create()(Order)