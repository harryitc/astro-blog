---
layout: ../../layouts/PostLayout.astro
title: "Code Highlighting"
author: "Harryitc"
description: "Tổng hợp các markdown highlighting"
image:
    url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2025-01-17
tags: ["astro", "markdown", "code highlighting"]
---
Chi tiết hơn thì tham khảo tại: [Expressive Code](https://expressive-code.com/)

```json
{
    "ahihi": "vai"
}
```

## Line numbers

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"
```

```html
<!-- src/content/index.html -->
<div>File name comment example</div>
```

```c++ { 1, 2, 3, 4, 5} title="mytest.c++"
#include<bits/stdc++.h>
using namespace std;
 
// Sort tăng dần theo Second
bool sortbysec(const pair<int,int> &a,
              const pair<int,int> &b)
{
    return (a.second < b.second);
}
  
int main()
{
    int n;
    cin >> n;
     
    // Không thỏa yêu cầu đề bài
    if(n < 1) {
        cout << -1;
        return 0;
    }
  
    // First: Vị trí ban đầu khi nhập input của tọa độ.
    //        Và kết quả cũng là thuộc tính này.
    // Second: khoảng cách của (x,y) -> (0,0).
    vector<pair<int, int> > result;
    int x, y;
    int distance = 0; // khoảng cách của (x,y) -> (0,0)
     
    // Lưu dữ liệu 2 thuộc tính
    // First: khoảng cách của (x,y) -> (0,0)
    // Second: Số bước phải đi từ khoảng cách (x,y) -> (0,0)
    map<int, int> mp;
    // Khởi tạo mặc định là 100.000 phần tử có giá trị là 0 (số lần xuất hiện khoảng cách là 0)
    for(int i = 0; i <= 100000; i++) mp[i] = 0;
      
      
    cin >> x >> y;
     
    // Chuyển tọa độ về dương (góc phần 1/4)
    x = abs(x);
    y = abs(y);
     
    // Nếu x == y thì khoảng cách sẽ là x hoặc y
    if( x == y ) distance = x;
    // Ngược lại, sẽ lấy điểm lớn nhất chính là khoảng cách của drone
    else distance = max(x, y);
      
    // Drone xuất hiện ở vị trí (0,0)
    // Thì xuất kết quả -1
    if (distance == 0) {
        cout << -1;
        return 0;
    }
     
    // Tăng số lần xuất hiện khoảng cách lên 1 đơn vị
    ++mp[distance];
      
    // Đưa vào mảng kết quả
    result.push_back({ 0, distance });
      
    for(int i = 1; i < n; i++){
          
        cin >> x >> y;
         
        // Chuyển tọa độ về dương (góc phần 1/4)
        x = abs(x);
        y = abs(y);
         
        // Nếu x == y thì drone đang đứng sẽ là 
        // vị trí (khoảng cách) x hoặc y
        if( x == y ) distance = x;
        // Ngược lại, sẽ lấy điểm lớn nhất 
        // làm khoảng cách của drone
        else distance = max(x, y);
 
        // Drone xuất hiện ở vị trí (0,0)
        // Thì xuất kết quả -1
        if (distance == 0) {
            cout << -1;
            return 0;
        }
         
        // Tăng số lần của khoảng cách đó lên 1 đơn vị
        ++mp[distance];
         
        // Khoảng cách tại vị trí drone đang đứng
        // mà nhỏ hơn số lần phải di chuyển đến (0,0)
        // thì xuất -1
        if( distance < mp[distance] ){
            cout << -1;
            return 0;
        }
          
        // Đưa vào mảng kết quả
        result.push_back({ i, distance });
    }
     
    // Sắp xếp lại danh sách tăng dần
    // theo vị trí drone đang đứng (x,y) -> (0,0)
    sort(result.begin(), result.end(), sortbysec);
 
    // ----------- Logic: xử lý kết quả = -1 ---------------
    // Code ban đầu:
    /*
        for(int i = 1; i < result.size(); i++) {
            if(result[i].second == result[i-1].second)  continue;
             
            int distance = result[i].second;
             
            int countAppearOfDrone = 0;
             
            for(int j = 0; j <= i-1; j++) {
                if(result[j].second == result[j+1].second)  continue;
                countAppearOfDrone = countAppearOfDrone + mp[result[j].second];
            }
            countAppearOfDrone = countAppearOfDrone + mp[result[i].second];
             
            if(distance < countAppearOfDrone) {
                cout << -1;
                return 0;
            }
        }
    */
    // Code lúc sau: Tối ưu bằng Quy hoạch động
    int a[100000];
    a[0] = mp[result[0].second];
    for(int i = 1; i < result.size(); i++) {
        // Bỏ qua các giá trị trùng lặp
        // Đồng thời, gán ô thứ i với giá trị cũ i-1
        if(result[i].second == result[i-1].second)  { a[i] = a[i-1]; continue; };
         
        // Lấy khoảng cách của drone ngay tại vị trí đó
        int distance = result[i].second;
         
        // Tính số bước phải di chuyển từ khoảng cách đó đến (0,0)
        a[i] = a[i-1] + mp[result[i].second];
         
        // Khoảng cách tại vị trí drone đang đứng
        // mà nhỏ hơn số bước phải di chuyển đến (0,0)
        // thì xuất -1
        if(distance < a[i]) {
            cout << -1;
            return 0;
        }
    }
     
    // In ra kết quả
    for(int i = 0; i < n; i++){
        cout << result[i].first + 1<<" ";
    }
  
    return 0;
}
```

## Git changes

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // This line and the next one are marked as inserted
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

```jsx {"1. Provide the value prop here:":5-6} del={"2. Remove the disabled and active states:":8-10} ins={"3. Add this to render the children inside the button:":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+this is an actual diff file
-all contents will remain unmodified
 no whitespace will be removed either
```

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

```js "given text"
function demo() {
  // Mark any given text inside lines
  return 'Multiple matches of the given text are supported';
}
```