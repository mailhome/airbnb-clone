export const MaxWidthContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className="2xl:max-w-[2520px] mx-auto container 2xl:px-20 xl:px-16 lg:px-10">
            { children }
        </div>
    )
}