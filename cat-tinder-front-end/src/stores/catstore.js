
class CatStore{
  constructor(){
    this.fields = {
      name:'',
      age: '',
      enjoys:''
    }
    this.errors = {}
    this.alerts = []      //lists alerts triggered
    this.arr = [];        //current session alerts
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    // {}
    // or
    // {firstName: 'is Required'}
    return this.errors
  }

  getAlerts(){
    return this.alerts
  }

  validate(){
    this.errors = {}
    this.arr = []
    this.alerts = []
    this.validateName('name')
    this.validateAge('age')
    this.validateEnjoy('enjoys')
  }

  validateName(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
      this.addAlert(0, 'Please fill in a name')
    }
    // else {this.removeAlert(this.alerts.indexOf('Please fill in your first name'))}
  }

  validateAge(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'Required')
      this.addAlert(1, 'Please fill in an age')
    }
    //else {this.removeAlert(this.alerts.indexOf('Please fill in your last name'))}
  }


  validateEnjoy(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
      this.addAlert(2, 'Please fill in some content')
    }
    //else {this.removeAlert(this.alerts.indexOf('Please fill in your last name'))}
  }

  addAlert(index, message){
    this.arr[index] = message;
    this.alerts= this.arr
  }

  removeAlert(index){
    this.arr.splice(index, 1)
    this.alerts = this.arr
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}


const store = new CatStore()
export default store
