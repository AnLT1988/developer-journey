#include <iostream>
#include "math_utils.h"

namespace math
{

    int area(int width, int length)
    {
        return width * length;
    }

    int area(int width)
    {
        return width * width;
    }

}

double pow(double base, double power)
{
    for (int i = 0; i < power; i++)
    {
        base *= base;
    }

    return base;
}