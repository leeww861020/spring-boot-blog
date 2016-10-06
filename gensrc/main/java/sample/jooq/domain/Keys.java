/**
 * This class is generated by jOOQ
 */
package sample.jooq.domain;


import javax.annotation.Generated;

import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Record;
import org.jooq.UniqueKey;
import org.jooq.impl.AbstractKeys;


/**
 * A class modelling foreign key relationships between tables of the <code>spring_boot_blog</code> 
 * schema
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.8.4"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Keys {

    // -------------------------------------------------------------------------
    // IDENTITY definitions
    // -------------------------------------------------------------------------

    public static final Identity<Record, Long> IDENTITY_CATEGORY = Identities0.IDENTITY_CATEGORY;
    public static final Identity<Record, Long> IDENTITY_CATEGORY_POST = Identities0.IDENTITY_CATEGORY_POST;
    public static final Identity<Record, Long> IDENTITY_COMMENT = Identities0.IDENTITY_COMMENT;
    public static final Identity<Record, Long> IDENTITY_POST = Identities0.IDENTITY_POST;
    public static final Identity<Record, Long> IDENTITY_USER = Identities0.IDENTITY_USER;

    // -------------------------------------------------------------------------
    // UNIQUE and PRIMARY KEY definitions
    // -------------------------------------------------------------------------

    public static final UniqueKey<Record> KEY_CATEGORY_PRIMARY = UniqueKeys0.KEY_CATEGORY_PRIMARY;
    public static final UniqueKey<Record> KEY_CATEGORY_POST_PRIMARY = UniqueKeys0.KEY_CATEGORY_POST_PRIMARY;
    public static final UniqueKey<Record> KEY_COMMENT_PRIMARY = UniqueKeys0.KEY_COMMENT_PRIMARY;
    public static final UniqueKey<Record> KEY_POST_PRIMARY = UniqueKeys0.KEY_POST_PRIMARY;
    public static final UniqueKey<Record> KEY_USER_PRIMARY = UniqueKeys0.KEY_USER_PRIMARY;

    // -------------------------------------------------------------------------
    // FOREIGN KEY definitions
    // -------------------------------------------------------------------------

    public static final ForeignKey<Record, Record> FKGRLW4Y7OYWGGM56QBNEHFN4A4 = ForeignKeys0.FKGRLW4Y7OYWGGM56QBNEHFN4A4;
    public static final ForeignKey<Record, Record> FKMHKF2T5E9LCR9DL9IXC36X4B3 = ForeignKeys0.FKMHKF2T5E9LCR9DL9IXC36X4B3;
    public static final ForeignKey<Record, Record> FKS1SLVNKUEMJSQ2KJ4H3VHX7I1 = ForeignKeys0.FKS1SLVNKUEMJSQ2KJ4H3VHX7I1;
    public static final ForeignKey<Record, Record> FK8KCUM44FVPUPYW6F5BACCX25C = ForeignKeys0.FK8KCUM44FVPUPYW6F5BACCX25C;
    public static final ForeignKey<Record, Record> FK72MT33DHHS48HF9GCQRQ4FXTE = ForeignKeys0.FK72MT33DHHS48HF9GCQRQ4FXTE;
    public static final ForeignKey<Record, Record> FK7TK5HI5TL1TXFTYN44DTQ2MV6 = ForeignKeys0.FK7TK5HI5TL1TXFTYN44DTQ2MV6;

    // -------------------------------------------------------------------------
    // [#1459] distribute members to avoid static initialisers > 64kb
    // -------------------------------------------------------------------------

    private static class Identities0 extends AbstractKeys {
        public static Identity<Record, Long> IDENTITY_CATEGORY = createIdentity(Category.CATEGORY, Category.CATEGORY.ID);
        public static Identity<Record, Long> IDENTITY_CATEGORY_POST = createIdentity(CategoryPost.CATEGORY_POST, CategoryPost.CATEGORY_POST.ID);
        public static Identity<Record, Long> IDENTITY_COMMENT = createIdentity(Comment.COMMENT, Comment.COMMENT.ID);
        public static Identity<Record, Long> IDENTITY_POST = createIdentity(Post.POST, Post.POST.ID);
        public static Identity<Record, Long> IDENTITY_USER = createIdentity(User.USER, User.USER.ID);
    }

    private static class UniqueKeys0 extends AbstractKeys {
        public static final UniqueKey<Record> KEY_CATEGORY_PRIMARY = createUniqueKey(Category.CATEGORY, "KEY_category_PRIMARY", Category.CATEGORY.ID);
        public static final UniqueKey<Record> KEY_CATEGORY_POST_PRIMARY = createUniqueKey(CategoryPost.CATEGORY_POST, "KEY_category_post_PRIMARY", CategoryPost.CATEGORY_POST.ID);
        public static final UniqueKey<Record> KEY_COMMENT_PRIMARY = createUniqueKey(Comment.COMMENT, "KEY_comment_PRIMARY", Comment.COMMENT.ID);
        public static final UniqueKey<Record> KEY_POST_PRIMARY = createUniqueKey(Post.POST, "KEY_post_PRIMARY", Post.POST.ID);
        public static final UniqueKey<Record> KEY_USER_PRIMARY = createUniqueKey(User.USER, "KEY_user_PRIMARY", User.USER.ID);
    }

    private static class ForeignKeys0 extends AbstractKeys {
        public static final ForeignKey<Record, Record> FKGRLW4Y7OYWGGM56QBNEHFN4A4 = createForeignKey(sample.jooq.domain.Keys.KEY_CATEGORY_PRIMARY, CategoryPost.CATEGORY_POST, "FKgrlw4y7oywggm56qbnehfn4a4", CategoryPost.CATEGORY_POST.CATEGORY_ID);
        public static final ForeignKey<Record, Record> FKMHKF2T5E9LCR9DL9IXC36X4B3 = createForeignKey(sample.jooq.domain.Keys.KEY_POST_PRIMARY, CategoryPost.CATEGORY_POST, "FKmhkf2t5e9lcr9dl9ixc36x4b3", CategoryPost.CATEGORY_POST.POST_ID);
        public static final ForeignKey<Record, Record> FKS1SLVNKUEMJSQ2KJ4H3VHX7I1 = createForeignKey(sample.jooq.domain.Keys.KEY_POST_PRIMARY, Comment.COMMENT, "FKs1slvnkuemjsq2kj4h3vhx7i1", Comment.COMMENT.POST_ID);
        public static final ForeignKey<Record, Record> FK8KCUM44FVPUPYW6F5BACCX25C = createForeignKey(sample.jooq.domain.Keys.KEY_USER_PRIMARY, Comment.COMMENT, "FK8kcum44fvpupyw6f5baccx25c", Comment.COMMENT.USER_ID);
        public static final ForeignKey<Record, Record> FK72MT33DHHS48HF9GCQRQ4FXTE = createForeignKey(sample.jooq.domain.Keys.KEY_USER_PRIMARY, Post.POST, "FK72mt33dhhs48hf9gcqrq4fxte", Post.POST.USER_ID);
        public static final ForeignKey<Record, Record> FK7TK5HI5TL1TXFTYN44DTQ2MV6 = createForeignKey(sample.jooq.domain.Keys.KEY_POST_PRIMARY, Tag.TAG, "FK7tk5hi5tl1txftyn44dtq2mv6", Tag.TAG.POST_ID);
    }
}