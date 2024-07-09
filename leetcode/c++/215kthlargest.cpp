#include <bits/stdc++.h>
using namespace std;

struct TrieNode {
  TrieNode *children[26];
  bool isWord;
  TrieNode() {
    isWord = false;
    for (int i = 0; i < 26; i++) {
      children[i] = nullptr;
    }
  }
};

class Solution {
public:
  void insertTrie(string str, vector<TrieNode *> &v, int index) {
    // TrieNode *curr = v[index];
    if (v[index] == nullptr)
      v[index] = new TrieNode();
    TrieNode *curr = v[index];
    for (int i = 0; i < str.size(); i++) {
      int idx = str[i] - 'a';
      if (curr->children[idx] == nullptr) {
        curr->children[idx] = new TrieNode();
      }
      curr = curr->children[idx];
    }
    curr->isWord = true;
  }
  void extractFromThis(TrieNode *&t, int &k, vector<string> &ans, string str) {
    if (!t || k <= 0)
      return;

    if (t->isWord) {
      ans.push_back(str);
      k--;
    }
    for (int i = 0; i < 27; i++) {
      char ch = 'a' + i;
      if (t->children[i] != nullptr) {
        extractFromThis(t->children[i], k, ans, str + ch);
      }
    }
  }

  string solve(vector<int> &words, int k) {
    stack<int> s;
    int i = -1;
    while (i++ < words.size()) {
      if (s.size() < k) {
        s.push(words[i]);
        continue;
      }
      int elementLeftInWords = words.size() - i;
      while (elementLeftInWords + s.size() > k) {
        if (s.size() && s.top() < words[i]) {
          s.pop();
        } else
          break;
      }
      // top is now smaller
      s.push(words[i]);
    }
    i = 0;
    string ans = "";
    while (s.size()) {
      ans = to_string(s.top()) + ans;
      s.pop();
    }
    return ans;
  }
};
int main() {

  vector<int> words = {4, 6, 8, 2, 9, 6, 3};
  Solution sol;
  int k = 2;
  auto result = sol.solve(words, k);
  for (auto i : result)
    std::cout << i << std::endl;
  return 0;
}
