package baekjoon;

import java.util.Scanner;
import java.util.StringTokenizer;

public class B2_1152_단어의개수 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        StringTokenizer st = new StringTokenizer(s, " ");
        System.out.println(st.countTokens());
    }
}
