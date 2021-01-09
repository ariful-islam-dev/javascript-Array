const contacts = [
    {
        name: 'Cnanda',
        phone: '1-928-356-2835',
        email: 'sapien@felis.co.uk'
    },
    {
        name: 'Lyle',
        phone: '1-117-208-0446',
        email: 'eget.metus.In@felisadipiscingfringilla.co.uk'
    },
    {
        name: 'Aristotle',
        phone: '1-299-773-3685',
        email: 'ante@sociousquad.edu'
    },
    {
        name: 'Evangeline',
        phone: '1-128-570-5536',
        email: 'sem@mi.edu'
    },
    {
        name: 'Phillip',
        phone: '1-536-234-7703',
        email: 'elit.elit@magnisdisparturient.org'
    },
    {
        name: 'Rooney',
        phone: '1-286-633-2228',
        email: 'ante.dictum@acmattis.ca'
    },
    {
        name: 'Hannan',
        phone: '1-590-222-9734',
        email: 'Integer@pedePraesent.org'
    },
    {
        name: 'Matthew',
        phone: '1-359-199-0970',
        email: 'pharetra@gravidasagittisDuis.org'
    },
    {
        name: 'Mikayla',
        phone: '1-427-208-6214',
        email: 'tempus.mauris@dis.net'
    },
    {
        name: 'Brady',
        phone: '1-148-854-2490',
        email: 'Cras.dictum.ultricies@lectus.net'
    },
    {
        name: 'Porter',
        phone: '1-618-411-4718',
        email: 'quam.quis.diam@loeVivamusnibh.com'
    },
    {
        name: 'Conan',
        phone: '1-901-471-2061',
        email: 'neque@erat.com'
    },
    {
        name: 'Cedric',
        phone: '1-935-690-0146',
        email: 'condimentum.Donec.at@enim.ca'
    },
]
contacts.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});
const group = contacts.reduce((acc, cur) => {
    let groupName = cur.name.charAt(0).toUpperCase();
    if (acc[groupName]) {
        acc[groupName].push(cur)
    } else {
        acc[groupName] = [cur]
    }
    return acc
}, {})

const displayList = group=>{
    console.log('Displaying Contact Information');
    console.log('------------------------------------');

    const keys = Object.keys(group)
    keys.forEach(key=>{
        console.log(`Group: ${key}`);
        console.table(group[key]);
    })
}
displayList(group)