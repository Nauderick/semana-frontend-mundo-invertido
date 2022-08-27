import { getHellfireClubSubscriptions, subscribeToHellfireClub } from "./firebase/hellfire-clube.js"

const txtName = document.querySelector('#txtName')
const txtEmail = document.querySelector('#txtEmail')
const txtLevel = document.querySelector('#txtLevel')
const txtCharacter = document.querySelector('#txtCharacter')
const btnSubscribe = document.querySelector('#btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

    alert(`Inscrito com sucesso: ${subscriptionId}`)
})

 async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData()