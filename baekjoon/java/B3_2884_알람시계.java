package baekjoon;

import java.util.Scanner;

public class B3_2884_알람시계 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();

        if(m>=45){
            m = m-45;
        }else{
            if(h==0){
                h= h+23;
                m = m+15;

            }else{
                h--;
                m = m+15;
            }

        }
        System.out.printf("%d %d", h, m);
    }
}
