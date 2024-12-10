function isTriangle(a,b,c)
{
    if (a || b || c > 0) {
        return a + b > c && a + c > b && b + c > a;
    }
  
}