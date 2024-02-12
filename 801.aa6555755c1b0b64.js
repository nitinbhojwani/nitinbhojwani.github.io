"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[801],{1532:(U,l,a)=>{a.r(l),a.d(l,{EducationModule:()=>x});var s=a(6814),u=a(4289),t=a(8830),p=a(9862);let r=(()=>{class n{constructor(i){this.httpClient=i,this.educationUrl="/assets/education.json"}getEducation(){return this.httpClient.get(this.educationUrl)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(p.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var d=a(9634);function g(n,c){if(1&n&&(t.TgZ(0,"div")(1,"span",5),t._uU(2,"Score:"),t.qZA(),t.TgZ(3,"span",6),t._uU(4),t.qZA()()),2&n){const i=t.oxw();t.xp6(4),t.AsE(" ",i.education.score," / ",i.education.outOf," ")}}function f(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const i=c.$implicit;t.xp6(1),t.Oqu(i)}}function m(n,c){if(1&n&&(t.TgZ(0,"span",18),t._uU(1),t.qZA()),2&n){const i=c.$implicit;t.xp6(1),t.Oqu(i)}}function h(n,c){if(1&n&&(t.TgZ(0,"div",11)(1,"span",16),t._uU(2," Technologies: "),t._UZ(3,"br"),t.qZA(),t.YNc(4,m,2,1,"span",17),t.qZA()),2&n){const i=t.oxw();t.xp6(4),t.Q6J("ngForOf",i.education.techs)}}function _(n,c){1&n&&(t.TgZ(0,"span"),t._uU(1,"s"),t.qZA())}function v(n,c){1&n&&(t.TgZ(0,"a",9),t._UZ(1,"clr-icon",21),t.qZA()),2&n&&t.s9C("href",c.$implicit,t.LSH)}function Z(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.YNc(2,v,2,1,"a",20),t.qZA()),2&n){const i=c.$implicit;t.xp6(1),t.hij(" ",i.description," "),t.xp6(1),t.Q6J("ngForOf",i.links)}}function T(n,c){if(1&n&&(t.TgZ(0,"div",19)(1,"span",16),t._uU(2,"Achievement"),t.YNc(3,_,2,0,"span",7),t._uU(4,":"),t.qZA(),t.TgZ(5,"ul"),t.YNc(6,Z,3,2,"li",13),t.qZA()()),2&n){const i=t.oxw();t.xp6(3),t.Q6J("ngIf",(null==i.education.achievements?null:i.education.achievements.length)>1),t.xp6(3),t.Q6J("ngForOf",i.education.achievements)}}let A=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-education-template"]],inputs:{education:"education"},decls:32,vars:22,consts:[[1,"clr-row"],[1,"clr-col-lg-8","clr-col-md-12","clr-col-12"],[1,"card"],[1,"card-header","custom-title"],[1,"title-left"],[1,"p7"],[1,"value-fields","p2"],[4,"ngIf"],[1,"title-right","p4-font-style"],["target","_blank",3,"href"],[1,"org-logo",3,"src","alt","width","height"],[1,"card-block"],[1,"card-text"],[4,"ngFor","ngForOf"],["class","card-block",4,"ngIf"],["class","card-footer",4,"ngIf"],[1,"p2"],["class","label",4,"ngFor","ngForOf"],[1,"label"],[1,"card-footer"],["target","_blank",3,"href",4,"ngFor","ngForOf"],["shape","pop-out"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4)(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"div")(8,"span",5),t._uU(9,"Affiliation:"),t.qZA(),t.TgZ(10,"span",6),t._uU(11),t.qZA()(),t.TgZ(12,"div")(13,"span",5),t._uU(14,"Certificate:"),t.qZA(),t.TgZ(15,"span",6),t._uU(16),t.qZA()(),t.YNc(17,g,5,2,"div",7),t.qZA(),t.TgZ(18,"span",8)(19,"div")(20,"a",9),t._UZ(21,"img",10),t.qZA()(),t.TgZ(22,"div"),t._uU(23),t.ALo(24,"date"),t.ALo(25,"date"),t.qZA()()(),t.TgZ(26,"div",11)(27,"div",12)(28,"ul"),t.YNc(29,f,2,1,"li",13),t.qZA()()(),t.YNc(30,h,5,1,"div",14),t.YNc(31,T,7,2,"div",15),t.qZA()()()),2&o&&(t.xp6(6),t.AsE("",e.education.org,", ",e.education.location,""),t.xp6(5),t.hij(" ",e.education.affiliation," "),t.xp6(5),t.AsE(" ",e.education.certificate," in ",e.education.specialization," "),t.xp6(1),t.Q6J("ngIf",e.education.score),t.xp6(3),t.s9C("href",e.education.orgLink,t.LSH),t.xp6(1),t.s9C("src",null==e.education.orgLogo?null:e.education.orgLogo.url,t.LSH),t.s9C("alt",e.education.org),t.s9C("width",null==e.education.orgLogo?null:e.education.orgLogo.width),t.s9C("height",null==e.education.orgLogo?null:e.education.orgLogo.height),t.xp6(2),t.AsE(" ",t.xi3(24,16,e.education.startDate,"MMM yyyy")," - ",t.xi3(25,19,e.education.endDate,"MMM yyyy")||"Present"," "),t.xp6(6),t.Q6J("ngForOf",e.education.keyPoints),t.xp6(1),t.Q6J("ngIf",e.education.techs),t.xp6(1),t.Q6J("ngIf",e.education.achievements))},dependencies:[s.sg,s.O5,d.qvL,s.uU],styles:[".p4-font-style[_ngcontent-%COMP%]{color:#565656;font-weight:600;font-size:12px}.org-logo[_ngcontent-%COMP%]{padding-right:1%}.custom-title[_ngcontent-%COMP%]{display:flex}.title-left[_ngcontent-%COMP%]{flex-grow:1}.title-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;max-width:37%}.value-fields[_ngcontent-%COMP%]{font-size:.6rem;font-weight:700}"]})}return n})();function C(n,c){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"app-education-template",3),t.qZA()),2&n){const i=c.$implicit;t.xp6(1),t.Q6J("education",i)}}const y=[{path:"",component:(()=>{class n{constructor(i){this.experienceService=i}ngOnInit(){this.experienceService.getEducation().subscribe(i=>this.schools=i,i=>console.log(i))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(r))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-education"]],decls:4,vars:1,consts:[[1,"education-container"],["class","individual-education",4,"ngFor","ngForOf"],[1,"individual-education"],[3,"education"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Education"),t.qZA(),t.YNc(3,C,2,1,"div",1),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngForOf",e.schools))},dependencies:[s.sg,A]})}return n})()}];let E=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]})}return n})(),x=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[s.ez,E,d.eu2]})}return n})()}}]);