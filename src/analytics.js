function createAnalytics() {
    let count = 0;
    let destroyed = false;

    const listener = ()=>count++;

    document.addEventListener("click", listener );

    return {
        destroy(){
            document.removeEventListener("click", listener);
            isDestroyed = true;
        },
        getClicks(){
            if(destroyed){
                return `Analytics is destroyed. Total clicks = ${count}`;
            }
            return count;
        },
    }
}
window.analytics = createAnalytics();