// import React from "react";

// const pages = [
//   { name: "about", value: "about" },
//   { name: "annotation", value: "annotation" },
//   { name: "ipa tables", value: "ipaTables" },
// ];

// interface ITestProps {
//   page: string,
//   handlePageChange: function handlePageChangeApp(page:string) {

//   }
// }

// interface ITestState {
//   text: string;
// }

// export default class NavBar extends React.Component<
//   ITestProps,
//   ITestState
// > {
//   constructor(props: ITestProps) {
//     super(props);

//     this.handleAnnotation = this.handleAnnotation.bind(this);
//   }
//   // state = {
//   //   text: "",
//   // };

//   handleAnnotation(text: string) {
//     text = text.trim();
//     let words: string[] = text.split(" ");
//     console.log(text, words, "input");
//     words = words.map((word) => annotate(word));
//     console.log(words.join(" "), words, "output");
//     this.setState({ text: words.join(" ") });
//   }

//   render() {
//     return (
//       <div className="App">
//         <form
//           // ref={formRef}
//           onSubmit={(e: React.SyntheticEvent) => {
//             e.preventDefault();
//             const target = e.target as typeof e.target & {
//               text: { value: string };
//             };
//             console.log(target);
//             this.handleAnnotation(target.text.value);
//             // let AEtext = annotate(target.text.value);
//             // this.setState({ text: AEtext });
//             // console.log(AEtext);
//           }}
//         >
//           <div>
//             <label>
//               Text:
//               <textarea name="text" style={{ width: "80%", height: "20%" }} />
//             </label>
//           </div>
//           <div>
//             <input type="submit" value="Annotate" />
//           </div>
//         </form>

//         <AnnotatedText text={this.state.text} />
//       </div>
//     ); // your code here
//   }
// }
