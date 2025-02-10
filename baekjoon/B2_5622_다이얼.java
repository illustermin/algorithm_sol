package baekjoon;

import java.io.IOException;

public class B2_5622_다이얼 {
    public static void main(String[] args) throws IOException {
        int count = 0;

        while(true) {
            // 한 문자를 읽어서 int(아스키 코드 값)로 변환하는 코드
            int value = System.in.read();
            // 끝이면 while문 종료
            if(value == '\n') break;
            // 어떤 문자인지 비교하여 count 더하기 (A-65)
            if(value < 68) count += 3;
            else if(value < 71) count += 4;
            else if(value < 74) count += 5;
            else if(value < 77) count += 6;
            else if(value < 80) count += 7;
            else if(value < 84) count += 8;
            else if(value < 87) count += 9;
            else count += 10;
        }
        System.out.println(count);
    }
}
