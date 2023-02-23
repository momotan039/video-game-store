const api="https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames"

export async function getGames(){
    
    const res=await fetch(api)
    if(!res.ok)
    {
        alert(res.statusText)
        return []
    }
    return await res.json()

}

export async function DeleteGame(id){
    const res=await fetch(api+'/'+id,{
        method:'Delete'
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    return await res.json()
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

    return await res.json()
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

    return await res.json()
}
