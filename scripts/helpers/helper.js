function returnIntMinMax(userMessage, min, max)
{
    do
    {
        number = parseInt(prompt(userMessage));
    }
    while(isNaN(number) || number < min || number > max);
    return number;
}
function returnIntMin(userMessage, min)
{
    do
    {
        number = parseInt(prompt(userMessage));
    }
    while(isNaN(number) || number < min);
    return number;
}
function returnIntMax(userMessage, max)
{
    do
    {
        number = parseInt(prompt(userMessage));
    }
    while(isNaN(number) || number > max);
    return number;
}
