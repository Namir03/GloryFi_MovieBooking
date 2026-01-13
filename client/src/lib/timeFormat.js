const timeFormat = (minutes) => {
    const h = Math.floor(minutes / 60);
    const minRem = minutes % 60;

    return `${h}h ${minRem}m`
}

export default timeFormat;