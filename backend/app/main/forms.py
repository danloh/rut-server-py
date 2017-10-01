# -*- coding: utf-8 -*-

import re
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField,\
                    SelectField, SubmitField, DateField
from flask_pagedown.fields import PageDownField
from wtforms.validators import DataRequired, URL, Length,\
                               HostnameValidation, ValidationError


class ImgURL(URL):

    field_flags = ('ValidImgURL', )  #what？

    def __init__(self, require_tld=True, message="Ivalid Image URL"):
        #regex = r'^[a-z]+://(?P<host>[^/:]+)(?P<port>:[0-9]+)?
        # (?P<path>\/.*)?\.(?P<format>png|jpg|gif|jpeg|bmp|webp)$'
        regex = r'^https?://(?P<host>[^/:]+)(?P<port>:[0-9]+)?(?P<path>\/.*)?\.(?P<format>png|jpg|gif|jpeg|bmp|webp|svg)$'
        super(URL, self).__init__(regex, re.IGNORECASE, message)
        self.validate_hostname = HostnameValidation(
            require_tld=require_tld,
            allow_ip=True,
        )

class ReactTo(object):
    """
    React to other field
    """
    def __init__(self, fieldname, criteria, message=None):
        self.fieldname = fieldname
        self.criteria = criteria
        self.message = message

    def __call__(self, form, field):
        try:
            other = form[self.fieldname]
        except KeyError:
            raise ValidationError(field.gettext("Invalid field name '%s'.") % self.fieldname)
        if other.data == self.criteria:
            d = {
                'other_label': hasattr(other, 'label') and other.label.text or self.fieldname,
                'other_name': self.fieldname,
                'other_criteria': self.criteria
            }
            if not field.data or isinstance(field.data, string_types) and not field.data.strip():
                message = self.message
                if message is None:
                    message = field.gettext('This Field is Required as adding %(other_criteria)s.')

                raise ValidationError(message % d)


class PostForm(FlaskForm):
    title = StringField(
        '*Title', 
        validators = [DataRequired(),\
            Length(min=1,max=256,message='max 256 characters')],
        render_kw={"placeholder":"Required"})
    intro = PageDownField(
        '*Preface', 
        validators = [DataRequired()], 
        render_kw={"placeholder":"Required, as Introduction; \nMarkdown Support, Preview Below"})
    tag = StringField(
        "*Set Tag", 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required, Seperate by comma, if multiple"})
    rating = SelectField(
        'Suitable for? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        choices=[('Professional','Professional'),\
                 ('All','All'),('College','College'),\
                 ('Secondary','Secondary'),\
                 ('Elementary','Elementary'),\
                 ('Preschool','Preschool')])
    credential = StringField(
        'Credentials',
        validators = [Length(min=0,max=256,message='Max 256 characters')],
        render_kw={"placeholder":"Show your experience here, up to 256 characters"})
    editable = SelectField(
        'Who Can Edit? &nbsp;&nbsp;',
        choices=[('Creator','Creator'),\
                 ('Contributors','Contributors'),\
                 ('Everyone','Everyone')])
    submit = SubmitField('submit')

class EpilogForm(FlaskForm):
    epilog = PageDownField('Add/Edit Epilog for List',
        validators = [DataRequired()],
        render_kw={"placeholder":"Markdown Support, Preview Below"})
    submit = SubmitField('Submit')

class EditPostForm(FlaskForm):
    title = StringField(
        '*Title', 
        validators = [DataRequired(),\
            Length(min=1,max=256,message='max 256 characters')],
        render_kw={"placeholder":"Required"})
    intro = PageDownField(
        '*Preface', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required; \nMarkdown Support, Preview Below"})
    rating = SelectField(
        'Suitable for? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        choices=[('Professional','Professional'),\
                 ('All','All'),('College','College'),\
                 ('Secondary','Secondary'),\
                 ('Elementary','Elementary'),\
                 ('Preschool','Preschool')])
    credential = StringField(
        'Credentials',
        validators = [Length(min=0,max=256,message='Max 256 characters')],
        render_kw={"placeholder":"Show your experience here, up to 256 characters"})
    editable = SelectField(
        'Who Can Edit? &nbsp;&nbsp;',
        choices=[('Creator','Creator'),\
                 ('Contributors','Contributors'),\
                 ('Everyone','Everyone')])
    submit = SubmitField('submit')

class EditTipsForm(FlaskForm):
    order = IntegerField("Change item Order in Post")
    tips = PageDownField(
        '*Edit Tips', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required; \nMarkdown Support, Preview Below"})
    submit = SubmitField('submit')

class CheckItemForm(FlaskForm): 
    checker = StringField(
        'URL to Fetch Item Information or UID/ISBN-13 to Check existing Item',
        validators = [DataRequired()],
        render_kw={"placeholder":"Required, Please input a valid URL or ISBN-13"})
    submit = SubmitField('Fetch')


class ItemForm(FlaskForm):
    uid = StringField(
        '*UID / ISBN-13',
        validators = [DataRequired()],
        render_kw={"placeholder":"Required, if no,Please input url below and hit the right button to generate"})
    title = StringField(
        '*Title', 
        validators = [DataRequired(),Length(min=1,max=256,message='max 256 characters')],
        render_kw={"placeholder":"Required"})
    res_url = StringField(
        'Online Resource URL. Required for Online Resource', 
        render_kw={"placeholder":"Required Url for Online resource, Optional for others"})
    author = StringField(
        'Author or Instructor:  e.g. Ann(Author) or Ian(Instructor)',
        render_kw={"placeholder":\
        "e.g. Ada(Author),Bill(Translator),Carl(Illustrator),Dan(Instructor)"})
    cover = StringField(
        'Image Url for Cover/Logo of item',
        render_kw={"placeholder":"Please input VALID Img URL"})
    cate = SelectField(
        'Select a Type', 
        choices=[('Book','Book'),('Video','video'),('Online','Online-Resource'),\
                 ('Album','Album'),('Other','Other')])
    tips = PageDownField(
        '*The Tips--Required : Tell Why You Add this Item', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required; \nMarkdown Support, Preview Below"})
    submit = SubmitField('submit')

class SelectDoneForm(FlaskForm):
    selectdone = SelectField(
        '*Select one of your have-done items to add to List',
        validators = [DataRequired()],
        coerce=int)
    tips = PageDownField(
        '*The Tips--Required : Tell Why You Add this Item', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required; \nMarkdown Support, Preview Below"})
    submit = SubmitField('Submit')

class SelectAddForm(FlaskForm):
    selectlist = SelectField(
        '*Select a List You Will Add item to',
        validators = [DataRequired()],
        coerce=int)
    tips = PageDownField(
        '*The Tips--Required : Tell Why You Add this Item', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required; \nMarkdown Support, Preview Below"})
    submit = SubmitField('Submit')

class EditItemForm(FlaskForm):
    uid = StringField('*UID or ISBN-13', validators = [DataRequired()])
    title = StringField('*Title', 
        validators = [DataRequired(),
            Length(min=1,max=256,message='max 256 characters')],
        render_kw={"placeholder":"Required"})
    res_url = StringField('Online Resource URL', 
        render_kw={"placeholder":"input url for item like online-course"})
    author = StringField(
        '*Author or Instructor, e.g. Ann(Author),Ian(Instructor)', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Required,\
         e.g. Ada(Author),Bill(Translator),Carl(Illustrator),Dan(Instructor)"})
    cover = StringField(
        '*Image Url for Cover/Logo of item',
        validators = [URL()],
        render_kw={"placeholder":"REQUIRED VALID Img URL"})
    cate = SelectField(
        'Select a Type', 
        choices=[('Book','Book'),('Video','video'),('Online','Online-Resource'),\
                 ('Album','Album'),('Other','Other')])
    publisher = StringField('*Publisher or Institution',
        validators = [DataRequired()],
        render_kw={"placeholder":"Required"})
    pub_date = StringField('Publish date or Open date of course',
        render_kw={"placeholder":"Publish Date"})
    language = StringField(
        '*Language',validators = [DataRequired()],
        render_kw={"placeholder":"Required"})
    binding = StringField('Binding of Book, Paperback or Hardcover or eBook?')
    page = StringField('Pages of a book or Lenght of a course')
    level = StringField('Level')
    price = StringField('Price')
    details = TextAreaField('More Details',
                            render_kw={"placeholder":"Required More Information"})
    itag = StringField("Set Tag",
                 render_kw={"placeholder":"Seperate by comma, if multiple"})
    submit = SubmitField('submit')


class CommentForm(FlaskForm):
    body = PageDownField('', 
        validators = [DataRequired()],
        render_kw={"placeholder":"Leave your comment; \nMarkdown Support, Preview Below"})
    submit = SubmitField('Submit')

class ClipForm(FlaskForm):
    body = PageDownField('', validators = [DataRequired()],
                       render_kw={"placeholder":"Required; \nMarkdown Support, Preview Below"})
    resource = SelectField('Here are items(up to 5) You are Working on',coerce=int)
    submit = SubmitField('Submit')

class ReviewForm(FlaskForm):
    heading = StringField('*Title', 
        validators = [DataRequired(),Length(min=1,max=256,message='max 256 characters')],
        render_kw={"placeholder":"Required, Max 256 characters"})
    body = PageDownField(
        '*Review, at least 256 characters', 
        validators = [DataRequired(),Length(min=256,message='at least 256 characters')],
        render_kw={"placeholder":"Required at least 256 characters; \nMarkdown Support, Preview Below"})
    submit = SubmitField('Submit')


class TagForm(FlaskForm):
    tag = StringField("*Tag Name",validators = [DataRequired()])
    parent = StringField("Parent Tag",render_kw={"placeholder":"Optional"})
    descript = TextAreaField(
        '*Tag Description', 
        validators = [DataRequired(),\
            Length(min=1,max=500,message='max 500 characters')],
        render_kw={"placeholder":"Required, Max 500 characters"})
    submit = SubmitField('Submit')

class TagStrForm(FlaskForm):
    tag = StringField("Tags",
        validators = [DataRequired()],
        render_kw={"placeholder":"Required, Seperate by comma, if multiple"})
    submit = SubmitField('Update')   

class DeadlineForm(FlaskForm):
    deadline = DateField("", render_kw={"placeholder":"Deadline, YYYY-MM-DD"})
    submit = SubmitField('Set')

class DemandForm(FlaskForm):
    body = TextAreaField(
        "Plan to read up on sth? Try sending a request here to entice more sharing ",
        validators = [DataRequired(),Length(min=1,max=512,message='max 512 characters')], 
        render_kw={"placeholder":"What is your request?  \
                    Max 400 characters, End with a #tag to tag"})
    submit = SubmitField('Send Request')

class ArticleForm(FlaskForm):
    title = StringField('*Title', 
        validators = [DataRequired(),
            Length(min=1,max=256,message='Max 256 characters')],
        render_kw={"placeholder":"Required"})
    figure = StringField(
        'Picture Url to be attached',
        render_kw={"placeholder":"REQUIRED VALID Img URL"})
    body = PageDownField(
        "*Start writing",
        validators = [DataRequired()], 
        render_kw={"placeholder":"Writing.... \nMarkdown Support, Preview Below"})
    submit = SubmitField('Submit')

class EditProfileForm(FlaskForm):    
    nickname = StringField('Change Public Nickname',
                          render_kw={"placeholder":"Max 64 characters"})
    location = StringField('Location')
    avatar = StringField('Profile Image URL, Max length 256')
    about = TextAreaField("About me")
    links = StringField('Blog/Social Page Link',
                        render_kw={"placeholder":"Valid URL, Max length 120"})
    submit = SubmitField('submit')