export default function tags() {
    let savedTags = [];
    let id = 0;

    let marked = () => {};

    

    const singletags_replacer = (text,spaces,tag) => {
        savedTags[id++] = tag;
        return spaces+"%svelte-md-block-tag-"+id+"%";
    }

    const tags_replacer = (text,space1,open,tag,content,space2,close) => {
         if(content.length > 0){
            content = before(content,marked);
            content = content.replace(new RegExp(`^[\\t ]{0,${space2.length}}`, "gm"),'');
            content = marked(content);
            if(!content.trim().match(/[\r\n]/g)) content = content.replace(/<p>|<\/p>/g,'').trim();
        }
        
        savedTags[id++] = `${open}${content}${close}`;
        return space1+"%svelte-md-block-tag-"+id+"%";;
    }

    const tags_restorator = (text,id) => {
        return savedTags[id-1];
    }

    const before = (text,processor) => {
        marked = processor;

        const single_re = /([\t ]*)(<\w+[^>]*\/>)/g;
        text = text.replace(single_re,singletags_replacer);
        
        const re = /([\t ]*)(<([\w-:]+)[^>]*>)\n?(([\s]*)[^<]*?)(<\/\3>)/gm
        while(text.match(re)) {
            text = text.replace(re,tags_replacer);
        }

        text = text.replace(/^[\\t ]+(%svelte\-md\-block\-tag\-\d+%)/gm,'$1');

        return text;
    }

    const after = (text,processor) => {
        const re = /%svelte\-md\-block\-tag\-(\d+)%/g;
        while(text.match(re)){
            text = text.replace(re,tags_restorator);  
        }
        return text;
    }


    return {before,after}
}