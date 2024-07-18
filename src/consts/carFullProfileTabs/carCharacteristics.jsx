
export const getCarMainFields=(carCharacteristic)=>{
  return  [
    {
        title:'Лот',
        value:carCharacteristic.general.id,
    },
    {
      title:'VIN',
      value:carCharacteristic.general.vin,
    },
    {
      title:'Объем ДВС',
      value:carCharacteristic.characteristic.engine,
    },
    {
      title:'Тип топлива',
      value:carCharacteristic.characteristic.fuel.name,
    },
    {
      title:'Трансмиссия',
      value:carCharacteristic.characteristic.transmission.name,
    },
    {
      title:'Привод',
      value:carCharacteristic.characteristic.drive.name,
    },
    {
      title:'Тип кузова',
      value:carCharacteristic.characteristic.body_type,
    },
    {
      title:'Цвет кузова',
      value:carCharacteristic.characteristic.color.name,
    },
    {
      title:'Пробег',
      value:carCharacteristic.characteristic.odometer,
    },
    ]
}
export const getCarAditionalFields=(carCharacteristic)=>{
  return [
    {
      title:'Тип документа',
      value:carCharacteristic.general.docFee.title,
    },
    {
      title:'Ключи',
      value:carCharacteristic.characteristic.keys,
    },
    {
      title:'Состояние',
      value:carCharacteristic.characteristic.highlight.name,
    },
    {
      title:'Отчет',
      value:'Нет',
    },
  ]
}