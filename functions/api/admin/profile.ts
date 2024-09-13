// Respond with data.user from auth middleware
export async function onRequestGet(context) {
    const {
        data,
    } = context

    //console.log(JSON.stringify(data.user))
    const identity = await data.cloudflareAccess.JWT.getIdentity();
    console.log(JSON.stringify(identity))
    return new Response(JSON.stringify(identity.name), {
        headers: {
            "content-type": "application/json"
        }
    })
}
