math: main.o math_utils.o
	g++ main.o math_utils.o -o myMath

main.o:
	g++ -c main.cpp

math_utils.o:
	g++ -c math_utils.cpp

clean:
	del *.o /s/q