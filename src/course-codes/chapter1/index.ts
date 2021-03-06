import { ILessonCode, ChapterCodeType } from '../../typings';

const l1: ILessonCode = {
  initialCode: `(* Start typing from the line below. *)`,
  answerCode: `(* Start typing from the line below. *)
contract Zealgame`
};

const l2: ILessonCode = {
  initialCode: `contract Zealgame
(* Start typing from the line below. *)
`,
  answerCode: `contract Zealgame
(* Start typing from the line below. *)
(owner: ByStr20)`
};

const l3: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
(* Start typing from the line below. *)
`,
  answerCode: `contract Zealgame
(owner: ByStr20)
(* Start typing from the line below. *)
field player_name : String = "Alice"`
};

const l4: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

(* Start typing from the line below *)
`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

(* Start typing from the line below *)
Transition changeName()
end`
};

const l5: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

Transition changeName()
    (* Start typing from the line below *)
end`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

Transition changeName()
    (* Start typing from the line below *)
    newname = "Bob"
end`
};

const l6: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

Transition changeName()
    (* Now that we’ll be having another line, don’t forget to include a semicolon at the end of this line *)
    newname = "Bob"
    (* Start typing from the line below.  *)

end`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

Transition changeName()
    (* Now that we’ll be having another line, don’t forget to include a semicolon at the end of this line *)
    newname = "Bob";
    (* Start typing from the line below.  *)
    Player_name := newname

end`
};

const l7: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

(* Start typing in the parentheses below *)
Transition changeName()
    player_name := newname
end
`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"

(* Start typing in the parentheses below *)
Transition changeName(newname: String)
    player_name := newname
end`
};

const l8: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"
(* Declare the two new immutable variables below. You don’t need to use any semicolons to separate the lines outside the transitions *)

Transition changeName(newname: String)
    player_name := newname
    (* Assign the value of the implicit variables to the new immutable variables in the lines below. You’ll need to separate the lines in the transition by the use of semicolons *)
end
`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"
(* Declare the two new immutable variables below. You don’t need to use any semicolons to separate the lines outside the transitions *)
field player_address : ByStr20 = 0x1234567890123456789012345678901234567890
field player_zeal: Uint128 = Uint128 0

Transition changeName(newname: String)
    player_name := newname;
    (* Assign the value of the implicit variables to the new immutable variables in the lines below. You’ll need to separate the lines in the transition by the use of semicolons *)
    player_address := _sender;
    player_zeal := _amount
end`
};

const l9: ILessonCode = {
  initialCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"
field player_address : ByStr20 = 0x1234567890123456789012345678901234567890
field player_zeal: Uint128 = Uint128 0

Transition changeName(newname: String)
    player_name := newname;
    player_address := _sender;
    player_zeal := _amount
end
`,
  answerCode: `contract Zealgame
(owner: ByStr20)
field player_name : String = "Alice"
field player_address : ByStr20 = 0x1234567890123456789012345678901234567890
field player_zeal: Uint128 = Uint128 0

Transition changeName(newname: String)
    player_name := newname;
    player_address := _sender;
    player_zeal := _amount
end`
};

const chapter1: ChapterCodeType = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

export default chapter1;
