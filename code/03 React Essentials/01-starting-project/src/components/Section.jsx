export default function section({title, children, ...props}){
    return (
        <section {...props}> {/* props that are not explicitly defined*/}
            <h2>{title}</h2>
            {children}
        </section>
    );
}