package baekjoon;

import java.util.Scanner;

public class B5_2588 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int sc1 = sc.nextInt();
        int sc2 = sc.nextInt();

        System.out.println(sc1*(sc2%10));
        System.out.println(sc1*((sc2/10)%10));
        System.out.println(sc1*(sc2/100));
        System.out.println(sc1*sc2);
    }
}
