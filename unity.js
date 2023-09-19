function unityMessage(obj_) {
    let data = { type: "ai_message" };
    data = Object.assign(JSON.parse(obj_), data);
    try {
        if (typeof window.parent.callingVuejsFunction === "function") {

            window.parent.callingVuejsFunction(data);
        }
    } catch (e) {
        window.parent.postMessage({
            message_type:"external",
            data: data,
        },'*')
    }
}
