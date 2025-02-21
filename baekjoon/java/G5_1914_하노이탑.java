package baekjoon;

import java.math.BigInteger;
import java.util.Scanner;

public class G5_1914_하노이탑 {
    public static void main(String[] args) {
        // BigInteger를 사용하여 이동 횟수를 계산
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        // 2^n - 1을 BigInteger로 계산
        BigInteger num = BigInteger.valueOf(2).pow(n).subtract(BigInteger.ONE);

        System.out.println(num);

        if (n <= 20) {
            hanoi(n, 1, 2, 3);
            System.out.println(sb);
        }
    }

    static StringBuilder sb = new StringBuilder();

    // 하노이 탑 이동 과정
    static void hanoi(int n, int from, int temp, int to) {
        if (n == 0) {
            return;
        }
        // n-1개를 from -> temp로 옮긴다
        hanoi(n - 1, from, to, temp);

        // n번째 원반을 from -> to로 옮긴다
        sb.append(from + " " + to + "\n");

        // n-1개를 temp -> to로 옮긴다
        hanoi(n - 1, temp, from, to);
    }
}
