#include <iostream>
#include "math_utils.h"

class User
{
    static int userId;

public:
    int id;
    std::string firstName;
    std::string lastName;

    User()
    {
        userId++;
        id = userId;
        std::cout << "User " << id << " instantiated\n";
    }
    ~User()
    {
        std::cout << "\nUser " << id++ << " destroyed";
    }
};

int User::userId = 0;

std::ostream &operator<<(std::ostream &output, User &user)
{
    output << "\nFirst name: " << user.firstName;
    output << "\nLast name: " << user.lastName;

    return output;
}

std::istream &operator>>(std::istream &input, User &user)
{
    std::string firstName;
    getline(input, firstName);
    user.firstName = firstName;

    return input;
}

void operator>>(std::istream &input, std::ostream &output)
{
    std::string temp;
    getline(input, temp);
    output << temp;
}

void pointer_example()
{
    int x = 'a';
    int x1 = 10;
    int *y = &x;
    int x2 = 11;

    std::cout << "x: " << x << std::endl;
    std::cout << "y: " << y << std::endl;
    std::cout << "*y: " << *y << std::endl;
    std::cout << "&y: " << &y << std::endl;
    std::cout << "&x: " << &x << std::endl;
    std::cout << "&x1: " << &x1 << std::endl;
    std::cout << "&x2: " << &x2 << std::endl;

    x = 66;

    std::cout << "x: " << x << std::endl;

    std::cout << "y: " << y << std::endl;
    std::cout << "*y: " << *y << std::endl;

    *y = 13;

    std::cout << "x: " << x << std::endl;

    std::cout << "y: " << y << std::endl;
    std::cout << "*y: " << *y << std::endl;

    int z = 20;
    y = &z;

    std::cout << "x: " << x << std::endl;
    std::cout << "z: " << z << std::endl;
    std::cout << "y: " << y << std::endl;
    std::cout << "*y: " << *y << std::endl;

    // char c = 'a';
    // y = &c;

    // std::cout << "x: " << x << std::endl;
    // std::cout << "z: " << z << std::endl;
    // std::cout << "y: " << y << std::endl;
    // std::cout << "*y: " << *y << std::endl;
}

void reference_example()
{
    int x = 5;
    int x1 = 10;
    int &y = x;
    int x2 = 11;
    int zx = x;
    int &zy = y;

    std::cout << sizeof(int) << std::endl;
    std::cout << "x: " << x << std::endl;
    std::cout << "&x: " << &x << std::endl;
    std::cout << "&x1: " << &x1 << std::endl;
    std::cout << "&x2: " << &x2 << std::endl;
    std::cout << "y: " << y << std::endl;
    std::cout << "&y: " << &y << std::endl;
    std::cout << "zx :" << zx << std::endl;
    std::cout << "&zx :" << &zx << std::endl;
    std::cout << "zy :" << zy << std::endl;
    std::cout << "&zy :" << &zy << std::endl;

    x = 66;

    std::cout << "x: " << x << std::endl;
    std::cout << "y: " << y << std::endl;
    std::cout << "&y: " << &y << std::endl;
    std::cout << "zx :" << zx << std::endl;
    std::cout << "&zx :" << &zx << std::endl;
    std::cout << "zy :" << zy << std::endl;
    std::cout << "&zy :" << &zy << std::endl;

    y = x1;

    std::cout << "x: " << x << std::endl;
    std::cout << "y: " << y << std::endl;
    std::cout << "&y: " << &y << std::endl;

    // int z = 20;
    // &y = z;

    // std::cout << "x: " << x << std::endl;
    // std::cout << "y: " << y << std::endl;
    // std::cout << "&y: " << &y << std::endl;

    // char c = 'a';
    // y = &c;

    // std::cout << "x: " << x << std::endl;
    // std::cout << "z: " << z << std::endl;
    // std::cout << "y: " << y << std::endl;
    // std::cout << "*y: " << *y << std::endl;
}

main()
{
    // User user;
    // user.firstName = "Thai An";
    // user.lastName = "Le";

    // std::cout << user << std::endl;

    // std::cout << "finish" << std::endl;
    // std::cin >> user >> std::cout;

    // std::cout << user << std::endl;

    // std::cin >> std::cout;

    reference_example();
}