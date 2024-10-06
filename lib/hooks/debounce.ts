export function debounce <T extends (...params:unknown[])=>unknown>
(
  func:T, 
  timeout:number,
  immediate: boolean = false
){
    let timer: number |  NodeJS.Timeout | undefined = undefined;
    return function(this:unknown,...args:Parameters<T>){
     if(timer===undefined && immediate){
      func.apply(this,args);
     }
      clearTimeout(timer);
      timer = setTimeout(() =>  func.apply(this,args) , timeout);
      return timer;
    };
  }