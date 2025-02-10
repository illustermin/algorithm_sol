package baekjoon;

import java.util.Scanner;

public class B5_25314 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int n = sc.nextInt();
        int l = n/4;
        String st = "long ";

        System.out.println(st.repeat(l)+ "int");
    }
}
