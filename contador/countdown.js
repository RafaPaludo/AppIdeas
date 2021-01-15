export default class Countdown{
  constructor(finalDate){
    this.finalDate = finalDate;
  }
  
  get _finalDate (){
    return new Date(this.finalDate);
  }

  get _actualDate (){
    return new Date();
  }

  get _dateDiff(){
    return this._finalDate.getTime() - this._actualDate.getTime();
  }

  get _days(){
    return this._dateDiff / (24 * 60 * 60 * 1000);
  }
 
}
