function userAge(age) {
    console.log('userage', age)
    return (dispatch) => {

        dispatch({
            type: "userage",
            payload: age
        })

    }
}

export { userAge }