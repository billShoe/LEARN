class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
    this.alerts = []
    this.arr = [];
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
    this.validateFirst('firstName')
    this.validateLast('lastName')
    this.validatePassword('password')
    this.validateEmail('email')
  }

  validateFirst(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
      this.addAlert(0, 'Please fill in your first name')
    }
    // else {this.removeAlert(this.alerts.indexOf('Please fill in your first name'))}
  }

  validateLast(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
      this.addAlert(1, 'Please fill in your last name')
    }
    //else {this.removeAlert(this.alerts.indexOf('Please fill in your last name'))}
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
      this.addAlert(2, 'Invalid Email')
    }
    //else {this.removeAlert(this.alerts.indexOf('Invalid Email'))}
  }

  validatePassword(fieldName){
    const filter = /^\w+(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not a password')
      this.addAlert(3, 'Invalid Password')
    }
    //else {this.removeAlert(this.alerts.indexOf('Invalid Password'))}
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


const store = new RegistrationStore()
export default store
