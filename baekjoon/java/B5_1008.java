package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B5_1008 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] input = br.readLine().split(" ");
        int a = Integer.parseInt(input[0]);
        int b = Integer.parseInt(input[1]);

        double c= (double)a /b;

        System.out.print(c);
    }
}
