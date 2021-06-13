#include <iostream>
#include <limits>
#include <cmath>
#include <ctime>
#include <vector>

void increase_number(int &number)
{
    number++;
}

void print_size_of_array(int data[])
{
}

int main()
{
    int number = 10;
    increase_number(number);
    std::cout << number << std::endl;

    int numbers[5] = {1, 2};
    std::cout << sizeof(numbers);
    print_size_of_array(numbers);
}