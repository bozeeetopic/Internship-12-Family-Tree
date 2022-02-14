function returnInt(userMessage, min, max)
{
    do
    {
        number = parseInt(prompt(userMessage));
    }
    while(number > min || number < max);
    return number;
}
