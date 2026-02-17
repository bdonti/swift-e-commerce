

> **⚠️ Warning:** Do not use any AI tools to answer these questions. You must write the answers in **Bangla**.
#### 1) What is the difference between `null` and `undefined`?

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

#### 3) What is the difference between `==` and `===`?

#### 4) What is the significance of `async`/`await` in fetching API data?

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).


#### 1) What is the difference between `null` and `undefined`?
#### undefined বোঝায় যে একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু এখনো কোনো ভ্যালু দেওয়া হয়নি। এটি জাভাস্ক্রিপ্ট নিজে থেকে সেট করে। কোনো ফাংশনে প্যারামিটার না দিলে বা অবজেক্টের কোনো প্রপার্টি না থাকলেও undefined পাওয়া যায়।
#### null বোঝায় ইচ্ছাকৃতভাবে কোনো ভ্যালু না থাকা। এটি প্রোগ্রামার নিজে থেকে অ্যাসাইন করে বোঝাতে যে ভ্যারিয়েবলটির কোনো মান নেই।

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
map() ফাংশনের মূল ব্যবহার হলো array-এর প্রতিটি উপাদানকে পরিবর্তন করা। এটি প্রদত্ত callback ফাংশনটি প্রতিটি উপাদানের উপর কল করে এবং একটি নতুন array ফেরত দেয়, যেখানে পরিবর্তিত মান থাকে। e.g. add operation, reformat objects etc. 
forEach() ফাংশন ব্যবহার করা হয় array-এর প্রতিটি উপাদানের উপর কোনো ফাংশন কার্যকর করতে, কিন্তু এটি কোনো নতুন array ফেরত দেয় না। অন্যদিকে, map() সবসময় একটি নতুন array তৈরি করে।


#### 3) What is the difference between `==` and `===`?
#### == (ডাবল ইকুয়াল) দুটি ভ্যালু তুলনা করে, তবে প্রয়োজনে আগে ডেটা টাইপ কনভার্ট করে নেয়। অর্থাৎ এটি শুধু ভ্যালু সমান কি না তা যাচাই করে।
=== (ট্রিপল ইকুয়াল) ভ্যালু এবং ডেটা টাইপ দুটোই তুলনা করে এবং কোনো টাইপ কনভার্সন করে না। এটি তখনই true দেয় যখন ভ্যালু ও টাইপ উভয়ই একই হয়।

#### 4) What is the significance of `async`/`await` in fetching API data?
#### async/await ব্যবহার করা হয় API কলের মতো অ্যাসিঙ্ক্রোনাস অপারেশন হ্যান্ডেল করার জন্য। async ফাংশনকে Promise রিটার্ন করে, আর await execution থামিয়ে রাখে যতক্ষণ না Promise resolve হয়, কোড পড়তে ও error handle করতে সহজ হয়।

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
#### গ্লোবাল স্কোপ (Global Scope):
যেসব ভ্যারিয়েবল কোনো ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা হয়, তাদের গ্লোবাল স্কোপ থাকে। এগুলো কোডের যেকোনো জায়গা থেকে ব্যবহার করা যায়।

let name= 'Rahid' //global
function greet(){
    console.log(`welcome ${name}`)
}

ফাংশন স্কোপ (Function Scope):
যেসব ভ্যারিয়েবল কোনো ফাংশনের ভিতরে ডিক্লেয়ার করা হয়, তাদের ফাংশন স্কোপ থাকে। এগুলো শুধুমাত্র ওই ফাংশনের ভিতরেই ব্যবহার করা যায়।
function add(a,b){ // function scope starts
    const result = a+b;
    return result
}

ব্লক স্কোপ (Block Scope):
যেসব ভ্যারিয়েবল কোনো ব্লকের ভিতরে (যেমন { ... }) let বা const দিয়ে ডিক্লেয়ার করা হয়, তাদের ব্লক স্কোপ থাকে। এগুলো শুধুমাত্র ওই ব্লকের ভিতরেই ব্যবহার করা যায়।
if(true){
    let age= 20;
    console.log(age); //works
}