function extractDomain(url) {
    // ex url = https://www.google.com/happy/?q='helloWorld'

    // this takes out www.google.com/happy/?q='helloWorld'
    const firstHalf = url.slice(url.indexOf("//") + 2);

    // this take front part out i.e www.google.com
    const secondHalf = firstHalf.slice(
        0,
        firstHalf.indexOf("/") > -1 ? firstHalf.indexOf("/") : firstHalf.length
    );

    return secondHalf;
}

export default extractDomain;
