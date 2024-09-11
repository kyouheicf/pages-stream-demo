// Respond with data.user from auth middleware
export async function onRequestGet(context) {
    const {
        data,
    } = context

    console.log(JSON.stringify(data.user))
    return new Response(JSON.stringify(data.user), {
        headers: {
            "content-type": "application/json"
        }
    })
}
