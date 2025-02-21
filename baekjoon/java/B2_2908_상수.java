package baekjoon;

import java.io.IOException;
import java.util.Scanner;

public class B2_2908_상수 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        a = Integer.parseInt(new StringBuilder().append(a).reverse().toString());
        b = Integer.parseInt(new StringBuilder().append(b).reverse().toString());

        System.out.println(a>b ? a : b);
    }
}
