export const rows = [
    { id: 1, pid: 'Package#1' , name: 'Proteco Insurance', desc: 'Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.', price: '12.50$' },
    { id: 2, pid: 'Package#2', name: 'Umbrella Insurance', desc: 'Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.', price: '35.73$' },
    { id: 3, pid: 'Package#3',  name: 'Thor Insurance', desc: 'Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.', price: '79.30$' },
  ];

export const columns =  [
    { field: 'pid', headerName: ''},
    { field: 'name', headerName: 'Insurer Name'},
    { field: 'desc', headerName: 'Description'},
    { field: 'price', headerName: 'Price / month'},
];

export const minAge = 0;
export const maxAge = 100;
export const userInfo = {
      'email' : '', 
      'age': minAge, 
      'gender': ''
};
export const errorInfo = {
  'emailError': false,
  'ageError': false
}

export interface RowData {
  rowInfo: {
      pid?: number,
      id?: string,
      name?: string,
      desc?: string,
  }
}

export interface UserInfo {
  email: string,
  age: number,
  gender: string
}

export interface ErrorValidation {
  emailError: boolean,
  ageError: boolean
}

export function validEmail(emailId: string) {
    let  validId : boolean;
    // eslint-disable-next-line
    let regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    validId = regexp.test(emailId);
    return validId
}