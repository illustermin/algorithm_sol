package baekjoon;

import java.util.Scanner;

public class B5_2739 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int n = sc.nextInt();
        int i;

        for(i=1; i<10; i++){
            System.out.printf("%d * %d = %d", n, i, n*i);
            System.out.println();
        }
    }
}
