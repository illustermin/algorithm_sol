package baekjoon;

import java.util.Scanner;

public class B2_10809_알파벳찾기 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        // -1로 된 알파벳 갯수26개 배열 생성
        int arr[] = new int[26];
        for (int i = 0; i < 26; i++) {
            arr[i] = -1;
        }
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (arr[ch - 'a'] == -1) {
                arr[ch - 'a'] = i;
            }
        }
        for (int var : arr) {
            System.out.print(var + " ");
        }
    }
}
