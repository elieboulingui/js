console.log("josue")
getdinoname()
async function getdinoname(){
    const res = await fetch("/dinoname")
    const data = await res.json()
    console.log(data)
}
