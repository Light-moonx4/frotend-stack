type TClan = 'TypeScript AM' | 'Node Nest AM' | 'Node Nest PM' |'C# .Net PM' |'java + Springboot'

interface ICoder{
    firstName: string;
    lastName: string;
    identification: string;
    birthdayDate: string;
    phoneNumber?: string;
    email: string;
    clan: TClan;
}

const coder: ICoder = {
    firstName: 'John',
    lastName: 'forrest',
    identification: '12544566',
    birthdayDate:'12-10-1991',
    email: 'john.forrest@rwi.io',
    clan: 'TypeScript AM',
    phoneNumber: '1234567890'
}

