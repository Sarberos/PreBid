
export const handlingPromise=(actionCreator)=>{
    return new Promise( (resolve,reject)=>{
      resolve(dispatch(actionCreator))
    })
  }