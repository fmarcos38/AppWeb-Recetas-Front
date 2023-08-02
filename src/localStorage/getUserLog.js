const getUserLog = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default getUserLog;