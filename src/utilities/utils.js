export function getTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = now - time;
    const minutes = Math.floor(diff / 60000); // 60000 milliseconds in a minute
    const hours = Math.floor(diff / 3600000); // 3600000 milliseconds in an hour
    const days = Math.floor(diff / 86400000); // 86400000 milliseconds in a day

    if (minutes < 30) {
        return 'just now';
    } else if (minutes < 60) {
        return `${minutes} min ago`;
    } else if (hours < 24) {
        return `${hours} hour(s) ago`;
    } else if (days < 30) {
        return `${days} day(s) ago`;
    } else {
        // If it's more than 30 days, you can return the actual date or some other message
        return 'more than 30 days ago';
    }
}

export function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}


