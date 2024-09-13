// Respond with data.user from auth middleware
export async function onRequestGet(context) {
    const {
        data,
    } = context

    console.log(JSON.stringify(data));
    const user = data.cloudflareAccess?.JWT?.payload;
    console.log(JSON.stringify(user));

    //const identity = await data.cloudflareAccess.JWT.getIdentity();
    //console.log(JSON.stringify(identity))
    return new Response(JSON.stringify(user), {
        headers: {
            "content-type": "application/json"
        }
    })
}
