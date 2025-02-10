package baekjoon;

import java.util.Scanner;

public class B3_2525_오븐시계 {
    public static void main(String[] args) {
            Scanner sc= new Scanner(System.in);
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            int total = 60*a+b+c;

            int hour = total/60;
            int min = total%60;

            if(hour>=24){
                hour = hour-24;
            }

            System.out.printf("%d %d", hour, min);
        }
    }

