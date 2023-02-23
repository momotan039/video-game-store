const api="https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames"
export let GAMES=[
    {
        "id": "36",
        "type": "Ps3",
        "price": 80,
        "title": "Mortal Kombat X",
        "year": 2012,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/10/mortal-kombat-x-ps3-300x344.jpg"
       },
       {
        "id": "37",
        "type": "Ps3",
        "price": 80,
        "title": "Call of Duty: Black Ops III",
        "year": 2015,
        "backGround": "https://romsfun.com/wp-content/uploads/2019/10/Call-of-Duty-Black-Ops-III-ps3-300x345.jpg"
       },
       {
        "id": "38",
        "type": "Ps3",
        "price": 80,
        "title": "Skate 3",
        "year": 2010,
        "backGround": "https://romsfun.com/wp-content/uploads/2020/01/Skate-3-ps3-300x349.jpg"
       },
      
]

export async function getGames(){
   return await new Promise((res,rej)=>{
        setTimeout(() => {
            res(GAMES)
        }, 2000);
    })
    const res=await fetch(api)
    if(!res.ok)
    {
        alert(res.statusText)
        return []
    }
    GAMES=await res.json()
    return GAMES
}

export async function DeleteGame(id){
    return await new Promise((res,rej)=>{
        setTimeout(() => {
            debugger
            GAMES=GAMES.filter(g=>g.id!==id)
            res(GAMES)
        }, 2000);
    })

    const res=await fetch(api+'/'+id,{
        method:'Delete'
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    GAMES=await res.json()
    return GAMES
}



export async function postGame(game){
    const res=await fetch(api,{
        method:'POST',
        body:JSON.stringify(game)
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    GAMES=await res.json()
    return GAMES
}

export async function putGame(game){
    const res=await fetch(api+'/'+game.id,{
        method:'PUT',
        body:JSON.stringify(game)
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    GAMES=await res.json()
    return GAMES
}
